import { IconType } from '@/atoms/Icon/enums'
import Icon from '@/atoms/Icon/Icon'

export const items = [
  {
    id: 0,
    value: 'Anatel',
    iconLeft: <Icon type={IconType.Business} />,
    iconRight: <Icon type={IconType.CallMade} />
  },
  {
    id: 1,
    value: 'Analista de sistema',
    iconLeft: <Icon type={IconType.Work} />,
    iconRight: <Icon type={IconType.CallMade} />
  },
  {
    id: 2,
    value: 'Analista de informação',
    iconLeft: <Icon type={IconType.Work} />,
    iconRight: <Icon type={IconType.CallMade} />
  }
]
