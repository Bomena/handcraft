let robot_arm = new ROSLIB.Topic({
    ros : ros,
    name : 'arm_command',
    messageType : 'std_msgs/Int16MultiArray'
});

let front = new ROSLIB.Topic({
    ros : ros,
    name : 'front',
    messageType : 'sensor_msgs/CompressedImage'
});

let left = new ROSLIB.Topic({
    ros : ros,
    name : 'left',
    messageType : 'sensor_msgs/CompressedImage'
});

let right = new ROSLIB.Topic({
    ros : ros,
    name : 'right',
    messageType : 'sensor_msgs/CompressedImage'
});

let back = new ROSLIB.Topic({
    ros : ros,
    name : 'back',
    messageType : 'sensor_msgs/CompressedImage'
});

//------------------------------------

robot_arm.subscribe(function(message) {
    console.log("robot_arm?");
    // let image = new Image();
    // image.src = "data:image/jpg;base64, " + message.data;
    // document.getElementById("robot_arm").src = image.src;
});

front.subscribe(function(message) {
    console.log("front?");
    let image = new Image();
    image.src = "data:image/jpg;base64, " + message.data;
    document.getElementById("front").src = image.src;
});

left.subscribe(function(message) {
    console.log("left?");
    let image = new Image();
    image.src = "data:image/jpg;base64, " + message.data;
    document.getElementById("left").src = image.src;
});


right.subscribe(function(message) {
    console.log("right?");
    let image = new Image();
    image.src = "data:image/jpg;base64, " + message.data;
    document.getElementById("right").src = image.src;
});

back.subscribe(function(message) {
    console.log("back?");
    let image = new Image();
    image.src = "data:image/jpg;base64, " + message.data;
    document.getElementById("back").src = image.src;
});
