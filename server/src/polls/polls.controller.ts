import {Controller, Get, Logger, Post, Body, ValidationPipe, UsePipes} from "@nestjs/common";
import { CreatePollDto, JoinPollsDto, RejoinPollsDto } from "./polls.dto";
import { PollsService } from "./polls.service";

@Controller('polls')
@UsePipes(new ValidationPipe({
    forbidUnknownValues: true,
    transform: true
}))
export class PollsController {

    constructor(private pollsService: PollsService) {}
    
    @Post("")
    async createPoll(@Body() createPollDto:CreatePollDto) {
        // Logger.log("Poll created")
        // return createPollDto;
        const result = await this.pollsService.createPoll(createPollDto);
        return result;
    }

    @Post("/join")
    async joinPoll(@Body() joinPollDto:JoinPollsDto) {
        // Logger.log("Joined in poll");
        // return joinPollDto;
        const result = await this.pollsService.joinPoll(joinPollDto);
        return result;
    }

    @Post("/rejoin")
    async rejoinPolls(@Body() rejoinPollDto:RejoinPollsDto) {
        // Logger.log("Rejoin on poll")
        // return rejoinPollDto;
        const result = await this.pollsService.rejoinPoll(rejoinPollDto);
        return result;
    }

}