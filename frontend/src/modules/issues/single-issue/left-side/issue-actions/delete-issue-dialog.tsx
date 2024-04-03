/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { useRouter } from 'next/router';
import React from 'react';

import type { IssueType } from 'common/types/issue';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogHeader,
  AlertDialogFooter,
} from 'components/ui/alert-dialog';
import { useCurrentTeam } from 'hooks/teams';

import { useDeleteIssueMutation } from 'services/issues';

interface DeleteIssueDialogProps {
  deleteIssueDialog: boolean;
  setDeleteIssueDialog: (value: boolean) => void;
  issue: IssueType;
}

export function DeleteIssueDialog({
  deleteIssueDialog,
  setDeleteIssueDialog,
  issue,
}: DeleteIssueDialogProps) {
  const { mutate: deleteIssue } = useDeleteIssueMutation({});
  const currentTeam = useCurrentTeam();
  const {
    query: { workspaceSlug },
    push,
  } = useRouter();

  const onDeleteIssue = () => {
    deleteIssue({ issueId: issue.id, teamId: currentTeam.id });
    setDeleteIssueDialog(false);
    push(`/${workspaceSlug}/team/${currentTeam.identifier}/all`);
  };

  return (
    <AlertDialog open={deleteIssueDialog} onOpenChange={setDeleteIssueDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently remove this the
            issue.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onDeleteIssue}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
