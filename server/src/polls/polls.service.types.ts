export class createPoll {
    topic: string;
    votesPerVoter: Number;
    name: string;
}

export class joinPoll {
    pollID: string;
    name: string;
}

export class rejoinPoll {
    pollID: string;
    name: string;
}