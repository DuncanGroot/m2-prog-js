class App
{
    runApplication()
    {
        console.log("hello world!");
        let appname = "lesson1app";
        let version = 0.9;
        const versiondate = "11/24/2022";
        const author = "Duncan Groot";
        const copyright = "Mediacollege Amsterdam";
        const distributor = "Duncan Groot";
        let darkmode = true;
        console.log(appname);
        console.log(version);
        console.log(versiondate);
        console.log(author);
        console.log(copyright);
        console.log(distributor);
        console.log(darkmode);
    }
}
let app = new App();
app.runApplication();