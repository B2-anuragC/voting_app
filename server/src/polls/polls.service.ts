import { Injectable } from "@nestjs/common";
import { createPoll, joinPoll, rejoinPoll } from "./polls.service.types";
import { createPollID, createUserID } from "src/utils/ids.util";

@Injectable()
export class PollsService {

    async createPoll(fields: createPoll) {
        const pollID = createPollID();
        const userID = createUserID();
        return {
            ...fields,
            pollID,
            userID
        }
    }

    async joinPoll(fields: joinPoll) {
        const userID = createUserID();
        return {
            ...fields,
            userID
        }
    }

    async rejoinPoll(fields: rejoinPoll) {
        return {...fields}
    }   

}