// Table.tsx
import { View, Text, TouchableOpacity } from 'react-native';
import IconVectorComponent, { IconType } from '../IconVectorComponent';
import { useRouter } from 'expo-router';

interface OrderFullProps {
    reference: string,
    status: string,
    count: number
}

export default function OrderFull({ reference, status, count }: OrderFullProps) {
const router = useRouter()

    return (


        <View

            className={`flex-row p-2 ${count % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
        >
            <Text className="flex-1">{count}</Text>
            <Text className="w-[25%] text-center">{reference}</Text>
            <Text className="w-[25%] text-center">{status}</Text>
            <TouchableOpacity>

            </TouchableOpacity>
            <Text className="w-[25%] text-center">
                <TouchableOpacity onPress={() => { router.push(`/cart/${reference}`) }}>
                    <IconVectorComponent icon={
                        {
                            value: {
                                type: IconType.FontAwesome5Icon,
                                name: "eye"
                            },
                            color: "black",
                            size: 22
                        }
                    } />
                </TouchableOpacity>
            </Text>
        </View>

    );
}
