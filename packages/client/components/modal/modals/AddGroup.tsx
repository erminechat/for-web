import { Trans } from "@lingui-solid/solid/macro";

import { Dialog, DialogProps } from "@revolt/ui";

import { useModals } from "..";
import { Modals } from "../types";

/**
 * Modal to add a group
 */
export function AddGroupModal(
  props: DialogProps & Modals & { type: "add_group" },
) {
  const { openModal } = useModals();

  return (
    <Dialog
      show={props.show}
      onClose={props.onClose}
      title="Add group"
      actions={[
        {
          text: "Create Group",
          onClick: () => {
            openModal({
              type: "create_group",
              client: props.client,
            });
          },
        },
      ]}
    >
      <Trans>
        Would you like to create a group?
      </Trans>
    </Dialog>
  );
}