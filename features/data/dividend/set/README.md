# Dividend Set
This feature is used to set all dividend data

## Usage example
- method: ```POST```
- path: ```/api/data/dividend```
- body: 
```json
{
    "dividend": [
        {
            "date":"09 April 2022, 17:32 WIB",
            "code":"AALI",
            "dividends":[
                {
                    "exDate":"Oct 12, 2021",
                    "dividend":"102",
                    "payDate":"Oct 22, 2021",
                    "yield":"2.49%"
                },
                {
                    "exDate":"Apr 23, 2021",
                    "dividend":"153",
                    "payDate":"May 10, 2021",
                    "yield":"2.58%"
                },
                {
                    "exDate":"Oct 08, 2020",
                    "dividend":"42",
                    "payDate":"Oct 19, 2020",
                    "yield":"0.88%"
                },
                {
                    "exDate":"Jun 19, 2020",
                    "dividend":"49",
                    "payDate":"Jul 03, 2020",
                    "yield":"0.57%"
                },
                {
                    "exDate":"Apr 25, 2019",
                    "dividend":"224",
                    "payDate":"May 16, 2019",
                    "yield":"3.00%"
                }
            ]
        },
        {
            "date":"09 April 2022, 17:32 WIB",
            "code":"ABBA",
            "dividends":[
                {
                    "exDate":"Feb 18, 2022",
                    "dividend":"",
                    "payDate":"Feb 23, 2022",
                    "yield":"-"
                },
                {
                    "exDate":"Oct 07, 2004",
                    "dividend":"",
                    "payDate":"Oct 13, 2004",
                    "yield":"-"
                }
            ]
        }
    ]
}
```
