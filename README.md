# Angular-character-count
Angular-character-count 
---------------------------------------------------

#### **Add in your file**
```
<script src="angular-character-count.js"></script>
```
####  **Add dependency in your module**

    var app=angular.module("you app name",['angular-character-count'])
    
####  **Using directive**

   <input class="form-control" type="text" placeholder="Type here" name="firstFormName" ng-model="first_name" ng-maxlength="50" char-count warning-count="10" danger-count="5">
