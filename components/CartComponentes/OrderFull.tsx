// Table.tsx
import { View, Text, TouchableOpacity } from 'react-native';
import IconVectorComponent, { IconType } from '../IconVectorComponent';
import { useRouter } from 'expo-router';

/* interface OrderFullProps {
    reference: string,
    status: string,
    count: number
} */
export type OrdersType = {
    items: OrderFullProps
    count: number
}

export interface OrderFullProps {
  id: string
  createdAt: string
  statusId: string
  userId: string
  Status: Status
  files: any[]
  orderItems: OrderItem[]
  orderDetail: OrderDetail
}

export interface Status {
  id: string
  type: string
  description: string
  orders: any
}

export interface OrderItem {
  id: string
  quantity: number
  medicineId: string
  orderId: string
  isActive: boolean
  medicine: Medicine
}

export interface Medicine {
  id: string
  name: string
  description: string
  quantity: number
  price: number
  providerId: string
  isActive: boolean
  medicineCategories: any
  medicineFiles: any
}

export interface OrderDetail {
  id: string
  amountPaid: number
  taxAmount: number
  deliveryAmount: number
  imposedId: string
  expenseId: string
  orderId: string
}


export default function OrderFull({items, count}: OrdersType) {

const router = useRouter()

    return (


        <View

            className={`flex-row p-2 ${count % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
        >
            <Text className="flex-1">{count}</Text>
            <Text className="w-[25%] text-center">{items.id}</Text>
            <Text className="w-[25%] text-center">{items.orderDetail.amountPaid}</Text>
            <Text className="w-[25%] text-center">{items.Status.type}</Text>
            <Text className="w-[25%] text-center">{items.orderDetail.taxAmount}</Text>
            <Text className="w-[25%] text-center">{items.orderDetail.deliveryAmount}</Text>
            <TouchableOpacity>

            </TouchableOpacity>
            <Text className="w-[25%] text-center">
                <TouchableOpacity onPress={() => { router.push(`/cart/${items.id}`) }}>
                    <IconVectorComponent icon={
                        {
                            value: {
                                type: IconType.FontAwesome5Icon,
                                name: "eye"
                            },
                            color: "#00665e",
                            size: 22
                        }
                    } />
                </TouchableOpacity>
            </Text>
        </View>

    );
}
