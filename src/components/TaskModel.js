// TaskModel.js
export default class TaskModel {
  constructor(
    id,
    title,
    description,
    status,
    priority,
    dueTime,
    assignee,
    creator,
    comments
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.dueTime = dueTime;
    this.assignee = assignee;
    this.creator = creator;
    this.comments = comments;
  }
}
