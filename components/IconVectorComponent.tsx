import { View, Text } from 'react-native'
import React from 'react'
import {
    FontAwesome, MaterialIcons, Ionicons,
    FontAwesome5,
    FontAwesome6,

    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    Fontisto,
    Foundation,
    MaterialCommunityIcons,
    Octicons,
    SimpleLineIcons,
    Zocial,
} from '@expo/vector-icons';


export enum IconType {
    MaterialIcon,
    FontAwesomeIcon,
    Ionicons,
    FontAwesome5Icon,
    FontAwesome6Icon,


    AntDesignIcon,
    EntypoIcon,
    EvilIconsIcon,
    FeatherIcon,
    FontistoIcon,
    FoundationIcon,
    MaterialCommunityIcon,
    OcticonsIcon,
    SimpleLineIcon,
    ZocialIcon,
}

export type CustomProps = {
    icon: {
        value: { type: IconType.MaterialIcon, name: keyof typeof MaterialIcons.glyphMap } |
        { type: IconType.FontAwesomeIcon, name: keyof typeof FontAwesome.glyphMap } |
        { type: IconType.Ionicons, name: keyof typeof Ionicons.glyphMap } |


        { type: IconType.FontAwesome5Icon, name: keyof typeof FontAwesome5.glyphMap } |
        { type: IconType.FontAwesome6Icon, name: keyof typeof FontAwesome6.glyphMap } |

        { type: IconType.AntDesignIcon, name: keyof typeof AntDesign.glyphMap } |
        { type: IconType.EntypoIcon, name: keyof typeof Entypo.glyphMap } |
        { type: IconType.EvilIconsIcon, name: keyof typeof EvilIcons.glyphMap } |
        { type: IconType.FeatherIcon, name: keyof typeof Feather.glyphMap } |
        { type: IconType.FontistoIcon, name: keyof typeof Fontisto.glyphMap } |
        { type: IconType.FoundationIcon, name: keyof typeof Foundation.glyphMap } |
        { type: IconType.MaterialCommunityIcon, name: keyof typeof MaterialCommunityIcons.glyphMap } |
        { type: IconType.OcticonsIcon, name: keyof typeof Octicons.glyphMap } |
        { type: IconType.SimpleLineIcon, name: keyof typeof SimpleLineIcons.glyphMap } |
        { type: IconType.ZocialIcon, name: keyof typeof Zocial.glyphMap }

        size: number;
        color: string;
    }

}

export default function IconVectorComponent(props: CustomProps) {
    const { icon, ...otherProps } = props;
    return (
        <>

            {icon.value.type === IconType.FontAwesomeIcon && (
                <FontAwesome name={icon.value.name} size={icon.size} color={icon.color} />
            )}
            {icon.value.type === IconType.MaterialIcon && (
                <MaterialIcons name={icon.value.name} size={icon.size} color={icon.color} />
            )}

            {icon.value.type === IconType.Ionicons && (
                <Ionicons name={icon.value.name} size={icon.size} color={icon.color} />
            )}

            {icon.value.type === IconType.FontAwesome5Icon && (
                <FontAwesome5 name={icon.value.name} size={icon.size} color={icon.color} />
            )}

            {icon.value.type === IconType.FontAwesome6Icon && (
                <FontAwesome6 name={icon.value.name} size={icon.size} color={icon.color} />
            )}



            {icon.value.type === IconType.AntDesignIcon && (
                <AntDesign name={icon.value.name} size={icon.size} color={icon.color} />
            )}

            {icon.value.type === IconType.AntDesignIcon && (
                <AntDesign name={icon.value.name} size={icon.size} color={icon.color} />
            )}
            {icon.value.type === IconType.EntypoIcon && (
                <Entypo name={icon.value.name} size={icon.size} color={icon.color} />
            )}
            {icon.value.type === IconType.EvilIconsIcon && (
                <EvilIcons name={icon.value.name} size={icon.size} color={icon.color} />
            )}
            {icon.value.type === IconType.FeatherIcon && (
                <Feather name={icon.value.name} size={icon.size} color={icon.color} />
            )}
            {icon.value.type === IconType.FontistoIcon && (
                <Fontisto name={icon.value.name} size={icon.size} color={icon.color} />
            )}
            {icon.value.type === IconType.FoundationIcon && (
                <Foundation name={icon.value.name} size={icon.size} color={icon.color} />
            )}
            {icon.value.type === IconType.MaterialCommunityIcon && (
                <MaterialCommunityIcons name={icon.value.name} size={icon.size} color={icon.color} />
            )}
            {icon.value.type === IconType.OcticonsIcon && (
                <Octicons name={icon.value.name} size={icon.size} color={icon.color} />
            )}
            {icon.value.type === IconType.SimpleLineIcon && (
                <SimpleLineIcons name={icon.value.name} size={icon.size} color={icon.color} />
            )}
            {icon.value.type === IconType.ZocialIcon && (
                <Zocial name={icon.value.name} size={icon.size} color={icon.color} />
            )}

        </>
    )
}