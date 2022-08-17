// Json
obj = { name: "rajkumar", length: 1, a: { this: "that" } };
jso = JSON.stringify(obj);
console.log(jso);
console.log(typeof (jso));

parsed = JSON.parse(`{"name":"rajkumar","length":1,"a":{"this":"that"}}`);
console.log(parsed);