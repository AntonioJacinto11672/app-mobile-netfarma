import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Control, FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";


interface TextInputWhitLabelProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    control: string,
    placeHolder: string
}

const TextInputWhitLabel: React.FC<TextInputWhitLabelProps> = ({
    id,
    label,
    type,
    disabled,
    required,
    register,
    errors,
    control,
}) => {
    return (
        <View>
            <Text className='my-4 '> {label} </Text>
            <TextInput id={id}  placeholder='Colar SMS da receita Médica aqui'
                autoComplete="off"
                disabled={disabled}
                {...register(id, { required })}
                className={`peer w-full p-4 pt-6  outline-none bg-white font-light border-2
         rounded-md transtion disabled:opacity-70
        disabled:cursor-not-allowed 
         focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500
        ${errors[id] ? "border-rose-400" : "border-slate-300"} 
        ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-300"} 
        `}
            />
        </View>
    )
}

export default TextInputWhitLabel;