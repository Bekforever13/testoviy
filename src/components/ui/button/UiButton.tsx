import React from 'react'
import { Button, ButtonProps, ConfigProvider } from 'antd'

const UiButton: React.FC<ButtonProps> = props => {
	return (
		<ConfigProvider theme={{ token: { colorPrimary: '#33CAFF' } }}>
			<Button type='primary' {...props} />
		</ConfigProvider>
	)
}

export { UiButton }
