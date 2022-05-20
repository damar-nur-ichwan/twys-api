# Profile Set
This feature is used to set all profile data

## Usage example
- method: ```POST```
- path: ```/api/data/profile```
- body: 
```json
{
    "history": [
        {
            "code": "AALI",
            "data": {
                "1643362379":{
                    "code":"AALI",
                    "date":"28 January 2022, 16:33 WIB",
                    "price":9675,
                    "action":"New",
                    "average":0,
                    "count":0,
                    "income":0
                },
                "1643362380":{
                    "code":"AALI",
                    "date":"28 January 2022, 16:33 WIB",
                    "action":"Buy",
                    "price":9675,
                    "count":1,
                    "average":9675,
                    "income":0
                }
            }
        },
        {
            "code": "ABBA",
            "data": {
                "1643362379":{
                    "code":"ABBA",
                    "date":"28 January 2022, 16:33 WIB",
                    "price":9675,
                    "action":"New",
                    "average":0,
                    "count":0,
                    "income":0
                },
                "1643362380":{
                    "code":"ABBA",
                    "date":"28 January 2022, 16:33 WIB",
                    "action":"Buy",
                    "price":9675,
                    "count":1,
                    "average":9675,
                    "income":0
                }
            }
        }
    ]
}
```
