import { Controller, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '../textfield';

type Props = Omit<
    TextFieldProps,
    | 'name'
    | 'onChange'
    | 'onBlur'
    | 'ref'
    | 'name'
    | 'min'
    | 'max'
    | 'maxLength'
    | 'minLength'
    | 'pattern'
    | 'required'
    | 'disabled'
> & {
    name: string;
};

export const ControlledTextField = ({ name, ...others }: Props) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <TextField {...others} {...field} name={name} error={error?.message} />
            )}
        />
    );
};
