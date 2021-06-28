import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors:{
        gray:{
            "900": "#212121",
            "30" : "#444444",
            "20" : "#D6D2C4",
            "10" : "#EDEDED"
        },
        red: {
            "500": "#DA0037",
        },
        white:{
            '10' : "#FFFFFF"
        },
        black:{
            '900': "#171717"
        },
    },
    fonts:{
        body: 'Poppins',
    },
    styles:{
        global:{
            body:{
                bg :'gray.10' , 
                color: 'black.900'
            }
        }
    }
})