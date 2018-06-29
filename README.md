# TrainScheduler-Firebase
##Section 07 - Firebase HW - Train Scheduler - making a web app that will allow input of the Train Name, Destination, First Train Time, and Frequency, and using the Firebase database, convert it into a schedule
####Train Administrators may enter the Name, Initial time of the first train, frequency of arrivals, and the train's destination, the code will Alert them that the new schedule has been updated, the time till the next train will arrive will be calculated in minutes, and the time of arrival will be calculated and displayed in a 12 hr AM/PM format. 
#####After the details have been entered by one admin, they will be saved in the Firebase realtime database, and made available to any other admin accessing the site.

##Instructions For Project --
### Overview

#####In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

###Base Requirements:
######* Make sure that your app suits this basic spec:
  
  * When adding trains, administrators should be able to submit the following:
    
    * Train Name
    
    * Destination 
    
    * First Train Time -- in military time
    
    * Frequency -- in minutes
  
  * Code this app to calculate when the next train will arrive; this should be relative to the current time.
  
  * Users from many different machines must be able to view same train times.
  
  * Styling and theme are completely up to you. Get Creative!

###Submit GitHub & GitHub Pages links

### Add To Your Portfolio and provide link to portfolio in the comments of the submission


### Bonus (Extra Challenges)

* Consider updating your "minutes to arrival" and "next train time" text once every minute. This is significantly more challenging; only attempt this if you've completed the actual activity and committed it somewhere on GitHub for safekeeping (and maybe create a second GitHub repo).

* Try adding `update` and `remove` buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).

* As a final challenge, make it so that only users who log into the site with their Google or GitHub accounts can use your site. You'll need to read up on Firebase authentication for this bonus exercise.