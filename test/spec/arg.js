
var TestArgString = "name=Ryan&number=27&state=CO";

describe("Arg", function(){

  it("namespace should be defined", function(){
    expect(Arg).toBeDefined();
  });

  it("should be able to process a URL string into an Arg.Args object", function(){
    var a = Arg.parse(TestArgString);
    expect(a).toBeDefined();
  });

  it("should be able to parse the string into a data object", function(){
    var obj = Arg.toPOJO(TestArgString);
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual("27");
    expect(obj["state"]).toEqual("CO");
  });

});

describe("Arg.Args", function(){

  it("should parse when constructed with a string", function(){
    var a = Arg.parse(TestArgString);
    expect(a._d["name"]).toEqual("Ryan");
    expect(a._d["number"]).toEqual("27");
    expect(a._d["state"]).toEqual("CO");
  });

  it("should save the data when constructed with an object", function(){
    var obj = {};
    var a = Arg.parse(obj);
    expect(a._d).toEqual(obj);
  });

  it("should get all values via all()", function(){
    var a = Arg.parse(TestArgString);
    expect(a.all()["name"]).toEqual("Ryan");
    expect(a.all()["number"]).toEqual("27");
    expect(a.all()["state"]).toEqual("CO");
  });

  it("should get values via get()", function(){
    var a = Arg.parse(TestArgString);
    expect(a.get("name")).toEqual("Ryan");
  });

  it("should return the string via toString()", function(){
    var a = Arg.parse(TestArgString);
    expect(a.toString()).toContain("name=Ryan");
    expect(a.toString()).toContain("number=27");
    expect(a.toString()).toContain("state=CO");
  });

  it("should return the updated args as a string via toString()", function(){
    var a = Arg.parse(TestArgString);
    a._d["new"] = "YES";
    expect(a.toString()).toContain("name=Ryan");
    expect(a.toString()).toContain("number=27");
    expect(a.toString()).toContain("state=CO");
    expect(a.toString()).toContain("new=YES");

    expect(a._s).toEqual(a.toString());

  });

  it("should be able to parse the string into a data object", function(){
    var args = new Arg.Args();
    args.parse(TestArgString);
    var obj = args._d;
    expect(obj["name"]).toEqual("Ryan");
    expect(obj["number"]).toEqual("27");
    expect(obj["state"]).toEqual("CO");
  });

});
