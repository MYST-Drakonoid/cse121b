export const doStuff = async(data) =>  {
    DB = await data.json();
    console.log("first: ", DB);
    let firstload = 0
    imageInfoHD = DB.hdurl;
    imageInfo = DB.url;
    displayPictureData(DB, firstload)
    firstload++
    return DB;
}