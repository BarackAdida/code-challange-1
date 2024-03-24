// propts the user to enter the speed
const speedLimit = 70;
const speed = prompt("Enter a speed:");
let points;
//first if to test if the speed was with in the limits
if(speed > speedLimit) {
    //calculates the points penalty if the speed is above the speed limit
    points = ((speed - speedLimit)/ 5)
    //second if test whether the points have reached license suspension point 
    if (points < 12) {
        console.log(points)
    } else {
        console.log("License suspended")
    }
} else {
    console.log("OK")
}

