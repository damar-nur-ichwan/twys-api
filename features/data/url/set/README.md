# about Set
This feature is used to set about data

## Usage example
- method: ```POST```
- path: ```/api/data/about```
- body: 
```json
{
    "about": {
        "application":{
        "description":"TWYS is an app designed to help traders make a BUY or SELL decision for the next market day. TWYS compiles a summary of the Technical Analysis of Moving Averages and Indicators from www.investing.com at 16:30 Indonesian time on each trading day. TWYS processes data collection with 96 strategies that have been designed by developers to generate a BUY or SELL decision on the next trading day. With an embedded Machine Learning system, TWYS will automatically choose the strategy that generates the most revenue overall. TWYS calculates Revenue by subtracting total profit by total loss. With this system, TWYS believes that traders will get more revenue from the market.",
        "developers":[
            "Damar Nur Ichwan",
            "Febrian Dhimas Syahfitra"
        ],
        "important_terms":{
            "total_trade":"is the total number of sales that have been made. Sales can result in a profit or loss.",
            "win_rate":"is the number of sales that make a profit of more than 0%, then divided by Total Trade.",
            "average_income":"is the total profit minus the total loss, then divided by Total Trade."
        }
    },
    "raw_data":{
        "description":[
            "TWYS collects raw data from www.investing.com once every day on the Indonesian stock exchange. The location of this raw data we show you with the aim that you understand where and how the raw data is formed by the ww.investing.com. In order for you to better understand, we hope you take the time to explore independently about what data there is and how it is formed. Here as an example, we will show raw data for BBCA shares.", 
            "The first, look for shares of BBCA or Bank Central Asia Tbk, then choose it.",
            "https://ibb.co/72FTk2n",
            "Second, scroll down to Technical Summary.",
            "https://ibb.co/tmRn1kt",
            "Yey, we've found the raw data collected by TWYS. The raw data is Neutral."
        ],
        "disclaimer":"The developers want to remind you that the data contained on the www.investing.com is not provided by the exchange but by the market maker who subscribes to the exchange. Therefore, the developers is not responsible for any trading losses you may incur as a result of the use of analytical results in the TWYS application. The developers or anyone involved with this application will not be liable for any loss or damage as a result of reliance on the information contained in this application. Please be fully aware of the risks and costs associated with financial market trading, stocks are one of the riskiest forms of investment."
        }
    }
}
```
