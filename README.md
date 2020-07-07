# SpaceX React Ionic App

this app is basically based on the wonderful API provided by spaceX for developer to build cool stuff. the base URL of this App API is
You can do visit the Production Build at : 
```
Build : http://spacex-ionic-react.surge.sh/
```

```
API : `https://api.spacexdata.com/v3`
```
### I have focused the Design on 3 features

- Launches
- Launchpads
- Ships

with some minor changes I used to structure like

- `Group List component` : under which call to the parent API and gettin all the array data as in mapping it into `indivisual face component`

- `Face Component` : This Component shows majors in the data properties like Names and other Major Stuff On clicking this Component it is routed to `Singles Component`

- `Singles Component` : In this component the Id or the Key is fetched through URL params and is used to make server request for that one single item and the recieved data is mapped to UI using APIData

### Screenshots:
##### (This all are mobile view Screenshots)
![](https://github.com/Mayank-MP05/SpaceX-Info-React-Ionic-App/blob/master/ss/menubar.PNG?raw=true)
![](https://github.com/Mayank-MP05/SpaceX-Info-React-Ionic-App/blob/master/ss/launch.PNG?raw=true)
![](https://github.com/Mayank-MP05/SpaceX-Info-React-Ionic-App/blob/master/ss/launchpad.PNG?raw=true)
![](https://github.com/Mayank-MP05/SpaceX-Info-React-Ionic-App/blob/master/ss/ship.PNG?raw=true)
![](https://github.com/Mayank-MP05/SpaceX-Info-React-Ionic-App/blob/master/ss/oneship.PNG?raw=true)
