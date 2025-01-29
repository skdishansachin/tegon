import { JsonValue } from '../common';
import { IssueComment } from '../issue-comment';
import { IssueHistory } from '../issue-history';
import { IssueRelation } from '../issue-relation';
import { IssueSuggestion } from '../issue-suggestion';
import { LinkedIssue } from '../linked-issue';
import { Support } from '../support';
import { Team } from '../team';

export class Issue {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: Date | null;
  title: string;
  number: number;
  description: string | null;
  descriptionMarkdown?: string | null;
  priority: number | null;
  dueDate: Date | null;
  sortOrder: number | null;
  subIssueSortOrder: number | null;
  estimate: number | null;
  sourceMetadata: JsonValue | null;
  isBidirectional: boolean | null;
  team?: Team;
  teamId: string;
  createdById: string | null;
  updatedById: string;
  subscriberIds: string[];
  assigneeId: string | null;
  labelIds: string[];
  stateId: string;
  parent?: Issue | null;
  parentId: string | null;
  subIssue?: Issue[];
  attachments: string[];
  support?: Support;
  comments?: IssueComment[];
  history?: IssueHistory[];
  linkedIssue?: LinkedIssue[];
  issueRelations?: IssueRelation[];
  IssueSuggestion?: IssueSuggestion | null;
  issueSuggestionId: string | null;
}
