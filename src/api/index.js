import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import uuid from "uuid";

var mock = new MockAdapter(axios, { delayResponse: 1000 });

mock.onPost("/url").reply(
    config =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.3) {
                    resolve([
                        200,
                        {
                            id: uuid(),
                            shortUrl: `https://sh.rt/${uuid().slice(0, 6)}`,
                            url:
                                "https://github.com/yante/halfof8/blob/master/src/components/",
                            title: "Some title retrieved from server"
                        }
                    ]);
                } else {
                    reject({ success: false, message: "Server side error" });
                }
            }, 1000);
        })
);

export const shortenUrl = url => axios.post("/url", { url });
