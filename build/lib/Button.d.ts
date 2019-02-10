import * as React from 'react';
import './Button.css';
export interface Props {
    /** This dictates what the button will say */
    children: React.ReactNode;
    /** This dictates what the button will do */
    onClick: () => void;
    /**
     * Disables onClick
     *
     * @default false
     */
    disabled?: boolean;
}
export declare const Button: {
    (props: Props): JSX.Element;
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "children": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "onClick": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "disabled": {
                "defaultValue": {
                    value: string;
                };
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
        };
    };
};
