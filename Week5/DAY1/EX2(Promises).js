const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
  
  // Testing Exercise 2
  promise.then(result => console.log(result)); // Expected: "success" (after 4 seconds)