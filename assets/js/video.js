$(function () {
    // Function to toggle video play/pause and control button visibility
    function videoToggle() {
        var video = $('.Level-video').get(0); // Get the video element
        
        // Check if the video is currently paused
        if (video.paused) {
            video.play(); // Play the video
            $('.video-control-play').hide(); // Hide the play button
            $('.video-control-pause').show(); // Show the pause button
        } else {
            video.pause(); // Pause the video
            $('.video-control-pause').hide(); // Hide the pause button
            $('.video-control-play').show(); // Show the play button
        }
    }

    // Click event handler for the play button
    $('.video-control-play').click(function () {
        videoToggle(); // Call the videoToggle function to change video state
    });

    // Click event handler for the pause button
    $('.video-control-pause').click(function () {
        videoToggle(); // Call the videoToggle function to change video state
    });
});
