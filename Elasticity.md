## Possible Incidents
1. When downloading meteorological data from the official website of the Meteorological Observatory, the data can't be downloaded successfully because of network delay.
2. Data analysis and processing takes a long time due to the large amount of data.

## Determine Metrics
1. Monitor real-time status of data acquisition services and weather forecast services.
2. Monitor data format and type for compliance.
3. Set a fixed time interval, such as five minutes, if there is no updated data transfer into the predictive model during the time interval, replace the data source.

## Elasticity Rules
1. When data transmission delay occurs, use the most recent data for forecast service.
2. When there is a small amount of data and a data error occurs, the data is manually corrected.
3. When the prediction delay occurs, the number of layers of the neural network is reduced, providing a relatively rough prediction result.
