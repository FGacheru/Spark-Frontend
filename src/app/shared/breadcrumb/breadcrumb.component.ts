import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Event, Router } from '@angular/router';
import { distinctUntilChanged, filter, first } from 'rxjs/operators';

export interface IBreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public breadcrumbs: IBreadCrumb[];
  private breadcrumbsObserver : any;

  constructor(
    private _route: Router,
    private _activatedRoute: ActivatedRoute
  ) { 
    this.breadcrumbs = this.buildBreadCrumb(this._activatedRoute.root);
  }

  ngOnInit(): void {
    this.breadcrumbsObserver = this._route.events.pipe( 
      filter((event: Event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this._activatedRoute.root);
    })
  }

  ngOnDestroy(): void {
    this.breadcrumbsObserver.unsubscribe();
  }

  /**
   * Recursively build breadcrumb according to the activated route.
   * @param route 
   * @param url 
   * @param breadcrumbs
   */
  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    //If no routeConfig available we're on root path
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    //if the route is dynamic route such as ':id' or ':slug' remove it
    const lastRoutePath = path?.split('/').pop();
    const isDynamicRoute = lastRoutePath?.startsWith(':');

    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePath?.split(':')[1];
      path = path?.replace(lastRoutePath!, route.snapshot.params[paramName!]);
      label = route.snapshot.params[paramName!];
    }

    //in the routeConfig the complete path is not available so we rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumb = {
      label: label,
      url: nextUrl
    };

    //only add route with non-empty label
    const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [ ... breadcrumbs];

    if (route.firstChild) {
      // if we are not on our current path yet there will be more children to look after to build our breadcrumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
