import React from 'react'
import { Rate, RateProps } from 'antd'

const UiRate: React.FC<RateProps> = props => {
	return <Rate {...props} />
}

export { UiRate }
