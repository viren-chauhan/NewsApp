import Config from "react-native-config"

type configKey = 'SECRET_KEY' | 'BASE_URI'

export const getEnvConfig = (key: configKey) => Config[key]