export class FormBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    placeholder: string;
    rows: number;
    cols: number;
    ariaLabel: string;
    options: {
        key: string,
        value: string
    }[];

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        placeholder?: string;
        rows?: number;
        cols?: number;
        ariaLabel?: string;
        options?: {
            key: string,
            value: string
        }[];
    } = {}) {
        this.value = options.value!;
        this.key = options.key || '';
        this.label = options.label || "";
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.placeholder = options.placeholder || '';
        this.rows = options.rows === undefined ? 1 : options.rows;
        this.cols = options.cols === undefined ? 1 : options.cols;
        this.options = options.options || [];
        this.ariaLabel = options.ariaLabel || "";
    }
}

export class TextareaItem extends FormBase<string> {
    controlType = 'textarea';
}

export class DropdownItem extends FormBase<string> {
    controlType = 'dropdown';
}

export class TextItem extends FormBase<string> {
    controlType = 'text';
}