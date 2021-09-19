// axios to make request
import axios from "axios";

const url: string = "https://mach-eight.uc.r.appspot.com/";


/**
 * getData - function that retrieves data from the url
 * @returns - array with the information of all nba players
 */
const getData = async () => {
  try {
    const result = await axios.get<any[]>(url);

    // acces the values key in the json
    const data: any[] = [result.data.values];
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * currentHeight - function that travers all data
 *
 * @param data
 */
const currentHeight = async (data: any[]) => {
  try {
    // height to search from cli argument
    const referenceH: number = +process.argv[2];

    for (let index = 0; index < data[0].length; index++) {
      let remainH: number = referenceH - data[0][index].h_in;
      let peerIndex = await searchPairHeight(remainH, data);
      if (peerIndex) {
        let firstPlayer: string =
          data[0][index].first_name + " " + data[0][index].last_name;
        let secondPlayer: string =
          data[0][peerIndex].first_name + " " + data[0][peerIndex].last_name;
        console.log("-", firstPlayer + "\t\t" + secondPlayer);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

/**
 * searchPairHeight - looks for the pair player to match the height
 * @param requestH
 * @param data
 * @returns
 */
const searchPairHeight = async (requestH: number, data: any[]) => {
  // traverse the data until number found
  for (let index = 0; index < data[0].length; index++) {
    // match casted as number type
    if (+data[0][index].h_in === +requestH) {
      return index;
    }
  }
};

const start = async () => {
  const data = await getData();
  const fooBar = await currentHeight(data);
};

start();
