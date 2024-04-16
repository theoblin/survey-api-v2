import { Body, Controller, Delete, Get, Ip, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { QuestionService } from './question.service';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { CreateQuestionDto } from './dto/create-question.dto';


@Controller('/api/v2/question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

    @ApiOperation({ summary: 'Search question' })
    @ApiResponse({ status: 200, description: 'Return question' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Get(':slug') 
    async getOneQuestion(@Param('slug') id:number)   {
      return this.questionService.getOneQuestionById(id)
    } 

    @ApiOperation({ summary: 'Update question' })
    @ApiResponse({ status: 201, description: 'The question has been successfully updated.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Put() 
    async updateOneQuestion(@Body('user') id: number,@Body('question') newQuestionData: UpdateQuestionDto){
      return this.questionService.updateOneQuestion(newQuestionData,id)
    }

    @ApiOperation({ summary: 'Create question' })
    @ApiResponse({ status: 201, description: 'The question has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Post()
    async createOneQuestion(@Body('user') id: number,@Body('question') createQuestionData: CreateQuestionDto,@Body('survey') surveyId: number,@Body('template') templateId: number){
      return this.questionService.createOneQuestion(id,surveyId,templateId,createQuestionData)
    }

    @ApiOperation({ summary: 'Delete question' })
    @ApiResponse({ status: 201, description: 'The question has been successfully deleted.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Delete() 
    async deleteOneQuestion(@Body('id') id: number){
      return this.questionService.deleteQuestionById(id)
    }

}
