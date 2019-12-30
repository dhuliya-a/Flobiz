import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleblog',
  template: `
    <body>
    <div >
    
    <app-navbar></app-navbar>

    </div>
    
<div class="bg-white text-black" style="margin-left:60px">
  
  <h1 class="display-3">City Lights</h1>
    <p class="lead"> If you like bright city lights and active nightlife then you will love this place.
    </p>
    <p class="card-text">Last updated 1 day ago</p>
   
</div>
    
    
    <div style="height:98%; width: 92%; margin: 10px auto;">
    <img class="img-fluid" src="./assets/images/5.jpg" alt="Card image cap">
</div>
<div style="width:92%; margin-left:55px;">
<br>
    <p align="center">The wet, desolate streets of the city rested in silence as the starry black sky wept over it. The water in the portholes shimmered by the glow of the bright, yellow street lamps. The small, green trees on the roadside swayed as the strong breeze hit them.

    Above a faded zebra crossing, a traffic light frantically changed colors seeming rather like a disco light. A watchman snored comfortably on his dark brown stool under the protection of his shops's roof. Huge giant buildings stood besides the street, quiet as if taken over by an army of libraries. Some windows gave out white and yellow lights, but the others were pitch black.
    
    It seemed like the clouds had gotten a sudden fascination to the moon and wrapped themselves around it.<br><br>The moon's faint glow passed through them, coloring them white from grey.
    
    The cool monsoon air carried a sweet moist scent like a candy shop kept inside a refrigerator.
    
    The pattering of the rain, which was now deaf to ears, was interrupted time by time during the night. Once a car passed by. Stray dogs began barking, while the deafening music from the car echoed around the street. The car soon disappeared and the dogs stopped barking satisfied that they had scared the car away. Later, a taxi came down the road and parked. A bunch of young kids came out laughing emphatically. The taxi drove away but the children stood at the corner of the lane, yet laughing vigorously. A man screeched out from his window and cursed at the noisy children who went mute immediately. A few lights flickered open through the windows and nosy neighbors looked out to inquire.<br><br> Aunties made sure they had  memorized enough points to gossip over tomorrow. Finally the furious man went back and the children departed for home.
    
    The streets of the city now rested again in lifeless silence except the gentle pattering of the raindrops. It lay there just like it had for many a changing years ready to rise when the sun's auburn rays would start to cast grey shadows over it.</p>

<br>
<br>
    </div>

    <button type="button" class="btn btn-outline-dark" type="submit" style="width:10%;margin-left:50px">Upvote</button><br><br>
    <h1 class="display-4" style="margin-left:50px">Comments</h1><br>
    
    <div class="card" style="width: 92%;margin-left:50px;">
 
  <div class="card-body">
  <p class="card-text">Hey! I really really liked your take on a night in a city.</p>  
  <h6 class="card-subtitle mb-2 text-muted">Wed 14 Mar 2019</h6>
    <br>
    
  <p class="card-text">Your storytelling is on another level!</p>  
  <h6 class="card-subtitle mb-2 text-muted">Fri 16 Mar 2019</h6>
  <br>
  <p class="card-text">I was able to experience all that just by reading your blog. Great job!</p>  
  <h6 class="card-subtitle mb-2 text-muted">Sat 24 Mar 2019</h6>
  <br>
    
    <input type="text" class="textarea" name="comment" placeholder="Your Comment">
<br>
  
<button type="button" class="btn btn-outline-dark" type="submit" style="width:10%;margin-left:0px">Comment</button><br><br>
</div>
</div>

 <app-footer></app-footer>
    </body>





  `,
  styles: []
})
export class SingleblogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
