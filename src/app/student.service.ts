import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentData:Array<student> = [];
  constructor(private http:HttpClient) { }

  saveStudent(student:student){
    this.studentData.push(student)
    return this.http.post(`https://616a6f7816e7120017fa0f91.mockapi.io/users`,student)
  }

  getAllUser(){
    return this.http.get<Array<student>>(`https://616a6f7816e7120017fa0f91.mockapi.io/users`)
  }

  getUserByID(id:number){
    return this.http.get<student>(`https://616a6f7816e7120017fa0f91.mockapi.io/users/${id}`)
  }

  updateUserById(userId:number,userdata:student){
    return this.http.put(`https://616a6f7816e7120017fa0f91.mockapi.io/users/${userId}`,userdata)
  }

  deleteUserById(id:number){
    return this.http.delete(`https://616a6f7816e7120017fa0f91.mockapi.io/users/${id}`)
  }
}