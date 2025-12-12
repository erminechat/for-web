import { Trans } from "@lingui-solid/solid/macro";

import { Dialog, DialogProps } from "@revolt/ui";

import { useModals } from "..";
import { Modals } from "../types";

/**
 * Modal to add a group or server
 */
export function AddGroupOrServerModal(
  props: DialogProps & Modals & { type: "add_group_or_server" },
) {
  const { openModal } = useModals();

  return (
    <Dialog
      show={props.show}
      onClose={props.onClose}
      title="Add group or server"
      actions={[
        {
          text: "Group",
          onClick: () => {
            openModal({
              type: "add_group",
              client: props.client,
            });
          },
        },
        {
          text: "Server",
          onClick: () => {
            openModal({
              type: "add_server",
              client: props.client,
            });
          },
        },
      ]}
    >
      <Trans>
        Would you like to add a group or server?
      </Trans>
    </Dialog>
  );
}
