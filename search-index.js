var searchIndex = {};
searchIndex['dft'] = {"items":[[0,"","dft","[Discrete Fourier transform][1].",null,null],[0,"complex","","Transformation of complex data.",null,null],[5,"forward","dft::complex","Perform the forward transform.",null,null],[5,"backward","","Perform the backward transform.",null,null],[5,"inverse","","Perform the inverse transform.",null,null],[0,"real","dft","Transformation of real data.",null,null],[5,"forward","dft::real","Perform the forward transform.",null,null],[5,"backward","","Perform the backward transform.",null,null],[5,"inverse","","Perform the inverse transform.",null,null],[5,"unpack","","Unpack a compressed representation produced by `real::forward`.",null,null]],"paths":[]};
searchIndex['complex'] = {"items":[[0,"","complex","[Complex numbers][1].",null,null],[3,"c32","","A complex number with 32-bit parts.",null,null],[3,"c64","","A complex number with 64-bit parts.",null,null],[8,"Number","","A number.",null,null],[8,"Real","","A real number.",null,null],[8,"Complex","","A complex number.",null,null],[16,"Real","","A real number.",0,null],[10,"new","","Create a complex number from a real and an imaginary part.",0,{"inputs":[{"name":"complex"},{"name":"real"},{"name":"real"}],"output":{"name":"self"}}],[10,"from_polar","","Create a complex number from a modulus and an argument.",0,{"inputs":[{"name":"complex"},{"name":"real"},{"name":"real"}],"output":{"name":"self"}}],[10,"re","","Return the real part.",0,{"inputs":[{"name":"complex"}],"output":{"name":"real"}}],[10,"re_mut","","Return the real part as a mutable reference.",0,{"inputs":[{"name":"complex"}],"output":{"name":"real"}}],[10,"im","","Return the imaginary part.",0,{"inputs":[{"name":"complex"}],"output":{"name":"real"}}],[10,"im_mut","","Return the imaginary part as a mutable reference.",0,{"inputs":[{"name":"complex"}],"output":{"name":"real"}}],[10,"abs","","Compute the modulus.",0,{"inputs":[{"name":"complex"}],"output":{"name":"real"}}],[10,"arg","","Compute the argument.",0,{"inputs":[{"name":"complex"}],"output":{"name":"real"}}],[11,"to_polar","","Compute the modulus and the argument.",0,null],[11,"conj","","Compute the complex conjugate.",0,{"inputs":[{"name":"complex"}],"output":{"name":"self"}}],[11,"eq","","",1,{"inputs":[{"name":"c32"},{"name":"c32"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"c32"},{"name":"c32"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"c32"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"c32"}],"output":{"name":"c32"}}],[11,"eq","","",2,{"inputs":[{"name":"c64"},{"name":"c64"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"c64"},{"name":"c64"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"c64"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"c64"}],"output":{"name":"c64"}}],[6,"Real","","",null,null],[11,"new","","",1,{"inputs":[{"name":"c32"},{"name":"real"},{"name":"real"}],"output":{"name":"c32"}}],[11,"from_polar","","",1,{"inputs":[{"name":"c32"},{"name":"real"},{"name":"real"}],"output":{"name":"self"}}],[11,"re","","",1,{"inputs":[{"name":"c32"}],"output":{"name":"real"}}],[11,"re_mut","","",1,{"inputs":[{"name":"c32"}],"output":{"name":"real"}}],[11,"im","","",1,{"inputs":[{"name":"c32"}],"output":{"name":"real"}}],[11,"im_mut","","",1,{"inputs":[{"name":"c32"}],"output":{"name":"real"}}],[11,"abs","","",1,{"inputs":[{"name":"c32"}],"output":{"name":"real"}}],[11,"arg","","",1,{"inputs":[{"name":"c32"}],"output":{"name":"real"}}],[6,"Output","","",null,null],[11,"add","","",1,{"inputs":[{"name":"c32"},{"name":"self"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[11,"add","","",1,{"inputs":[{"name":"c32"},{"name":"f32"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"div","","",1,{"inputs":[{"name":"c32"},{"name":"self"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[11,"div","","",1,{"inputs":[{"name":"c32"},{"name":"f32"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"mul","","",1,{"inputs":[{"name":"c32"},{"name":"self"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[11,"mul","","",1,{"inputs":[{"name":"c32"},{"name":"f32"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"neg","","",1,{"inputs":[{"name":"c32"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[11,"sub","","",1,{"inputs":[{"name":"c32"},{"name":"self"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[11,"sub","","",1,{"inputs":[{"name":"c32"},{"name":"f32"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[6,"Real","","",null,null],[11,"new","","",2,{"inputs":[{"name":"c64"},{"name":"real"},{"name":"real"}],"output":{"name":"c64"}}],[11,"from_polar","","",2,{"inputs":[{"name":"c64"},{"name":"real"},{"name":"real"}],"output":{"name":"self"}}],[11,"re","","",2,{"inputs":[{"name":"c64"}],"output":{"name":"real"}}],[11,"re_mut","","",2,{"inputs":[{"name":"c64"}],"output":{"name":"real"}}],[11,"im","","",2,{"inputs":[{"name":"c64"}],"output":{"name":"real"}}],[11,"im_mut","","",2,{"inputs":[{"name":"c64"}],"output":{"name":"real"}}],[11,"abs","","",2,{"inputs":[{"name":"c64"}],"output":{"name":"real"}}],[11,"arg","","",2,{"inputs":[{"name":"c64"}],"output":{"name":"real"}}],[6,"Output","","",null,null],[11,"add","","",2,{"inputs":[{"name":"c64"},{"name":"self"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[11,"add","","",2,{"inputs":[{"name":"c64"},{"name":"f64"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"div","","",2,{"inputs":[{"name":"c64"},{"name":"self"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[11,"div","","",2,{"inputs":[{"name":"c64"},{"name":"f64"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"mul","","",2,{"inputs":[{"name":"c64"},{"name":"self"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[11,"mul","","",2,{"inputs":[{"name":"c64"},{"name":"f64"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"neg","","",2,{"inputs":[{"name":"c64"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[11,"sub","","",2,{"inputs":[{"name":"c64"},{"name":"self"}],"output":{"name":"output"}}],[6,"Output","","",null,null],[11,"sub","","",2,{"inputs":[{"name":"c64"},{"name":"f64"}],"output":{"name":"output"}}],[6,"Output","","",null,null]],"paths":[[8,"Complex"],[3,"c32"],[3,"c64"]]};
initSearch(searchIndex);
