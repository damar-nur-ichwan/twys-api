# Profile Set
This feature is used to set all profile data

## Usage example
- method: ```POST```
- path: ```/api/data/profile```
- body: 
```json
{
    "profile": [
        {
            "date":"09 April 2022, 16:45 WIB",
            "code":"AALI",
            "name":"Astra Agro Lestari Tbk",
            "description":"PT Astra Agro Lestari Tbk, together with its subsidiaries, engages in the palm oil business in Indonesia. It provides crude palm oil and its derivatives, palm kernel and its derivatives, and other products. The company manages 286,727 hectares of oil palm plantations in Sumatra, Kalimantan, and Sulawesi. It also operates palm oil refineries in the Mamuju Utara Regency in West Sulawesi province; and Dumai, Riau province. In addition, the company operates fertilizer blending plants located in Pangkalan Bun, Central Kalimantan, and Donggala, Central Sulawesi. It exports its products in China, South Korea, India, Bangladesh, the Philippines, Pakistan, Singapore, and Kenya. The company was founded in 1988 and is headquartered in Jakarta, Indonesia. PT Astra Agro Lestari Tbk is a subsidiary of PT Astra International Tbk.",
            "contact":{
                "address":[
                    "Jalan Pulo Ayang Raya Block OR no. 1",
                    "Pulogadung Industrial Estate Jakarta",
                    "13930",
                    "Indonesia"
                    ],
                "phone":"62 21 461 6555",
                "fax":"62 21 461 6685",
                "web":"https://www.astra-agro.co.id/"
            },
            "topExecutives":[
                {
                    "name":"Sidharta Utama",
                    "age":"56",
                    "since":"2018",
                    "title":"Independent Commissioner"
                },
                {
                    "name":"Johannes Loman",
                    "age":"62",
                    "since":"2020",
                    "title":"Commissioner"
                }
            ]
        }
    ]
}
```
