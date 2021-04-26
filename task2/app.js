let trueValue = true;

do {
let confirmBox = confirm("");
if (!confirmBox) {
trueValue = false;
}
} while (trueValue); 