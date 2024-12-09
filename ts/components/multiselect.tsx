// import React from 'react';
import React, {useCallback} from 'react';
import {DashComponentProps} from '../props';

type OptionType = {
    label: string;
    value: string | number; // Change boolean to string or number
    disabled?: boolean;
};

type Props = {
    id?: string;
    options: OptionType[]; // List of options to render
    value: (string | number)[]; // Currently selected values (exclude boolean here)
    inline?: boolean; // Display inline (horizontal) or block (vertical)
    class_name?: string;
    setProps?: (props: Record<string, any>) => void;
} & DashComponentProps;


// type Props = {
//     id?: string;
//     // children: JSX.Element;
//     n_clicks?: number;
//     class_name?: string;
//     // Insert props

//     setProps?: (props: Record<string, any>) => void;
// } & DashComponentProps;

/**
 * Component description
 */
const multiselect = (props: Props) => {
    const { setProps, options, value, inline, class_name, id } = props;

    const onCheckboxChange = useCallback(
            (optionValue: string | number) => {
                const newValue = value.includes(optionValue)
                    ? value.filter((v) => v !== optionValue) // Uncheck
                    : [...value, optionValue]; // Check

                setProps({ value: newValue });
            },
            [value, setProps]
        );

    return (
        <div id={id} className={class_name}>
            {options.map((option) => (
                // <h1>{option.value}</h1>
                
                <label
                    key={option.value} // Key must be string or number
                    style={{
                        display: inline ? 'inline-block' : 'block',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={value.includes(option.value)}
                        disabled={option.disabled}
                        onChange={() => onCheckboxChange(option.value)}
                    />
                    {option.label}
                </label>
            ))}


         {/* {options.map((option) => (
                <label
                    key={option.value} // Key must be string or number
                    style={{
                        display: inline ? 'inline-block' : 'block',
                    }}
                >
                    <input
                        type="checkbox"
                        checked={value.includes(option.value)}
                        disabled={option.disabled}
                        onChange={() => onCheckboxChange(option.value)}
                    />
                    {option.label}
                </label>
            ))}  */}
        </div>
    );
    // const { id } = props;

    // const {
    //     setProps,
    //     // children,
    //     n_clicks,
    //     id,
    //     class_name,
    // } = props;

    // const onClick = useCallback(
    //     () => setProps({n_clicks: n_clicks + 1}),
    //     [n_clicks]
    // );

    // return (
    //     <div
    //         id={id}
    //         className={class_name}
    //         onClick={onClick}
    //     >
    //         { <h1>testing </h1>}
    //     </div>
    // )

}

multiselect.defaultProps = {
    inline: false,
    value: [],
};

export default multiselect;




