# Angular character count
Angular-character-count  [Demo](http://sufiiiyan.github.io/Angular-character-count/ ) 
Works well with ng-maxlength
---------------------------------------------------

#### **Add in your file**
```
<script src="angular-character-count.js"></script>
<script src="angular-character-count.css"></script>
```
####  **Add dependency in your module**

    var app=angular.module("you app name",['angular-character-count'])
    
####  **Using directive**

    <div>
       <input class="form-control" type="text" placeholder="Type here" name="firstFormName" ng-model="first_name" ng-maxlength="50" char-count warning-count="10" danger-count="5" />
    </div>

-------------------------------------------------------------------------------------------------------------------------------


## License

 Use this guide. Attributions are appreciated.

### Copyright

Copyright (c) 2015-2016 (Sufiyan Momin)

### (The MIT License)
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/sufiiiyan/angular-character-count/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

