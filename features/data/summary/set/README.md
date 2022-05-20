# Summary Set
This feature is used to set all summary data

## Usage example
- method: ```POST```
- path: ```/api/data/summary```
- body: 
```json
{
    "summary": [
        {
            "date":"09 April 2022, 17:25 WIB",
            "code":"AALI",
            "summary":" For the fiscal year ended 31 December 2021, Astra Agro Lestari Tbk PT revenues increased 29% to RP24.322T. Net income increased from RP833.09B to RP1.971T. Revenues reflect Crude palm oil and its derivatives segment increase of 27% to RP22.022T, Palm kernel and its derivatives segment increase of 68% to RP2.203T, Sumatera segment increase of 35% to RP11.701T, Sulawesi segment increase of 23% to RP12.386T."
        },
        {
            "date":"09 April 2022, 17:08 WIB",
            "code":"ABBA",
            "summary":" For the nine months ended 30 September 2021, Mahaka Media Tbk PT revenues increased 9% to RP117.4B. Net loss decreased 19% to RP15.9B. Revenues reflect Event Organizer segment increase from RP2.4B to RP25.65B, Billboard Advertisement segment increase of 37% to RP43.67B. Lower net loss reflects Salaries and allowances decrease of 12% to RP53.18B (expense), General and Administrative Costs - Balan decrease of 32% to RP12.42B (expense)."
        }
    ]
}
```
