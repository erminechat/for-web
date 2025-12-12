import { Trans } from "@lingui-solid/solid/macro";

import { Dialog, DialogProps } from "@revolt/ui";

import { useModals } from "..";
import { Modals } from "../types";

/**
 * Modal to add a server
 */
export function AddServerModal(
  props: DialogProps & Modals & { type: "add_server" },
) {
  const { openModal } = useModals();

  return (
    <Dialog
      show={props.show}
      onClose={props.onClose}
      title="Add Server"
      actions={[
        {
          text: "Join Server",
          onClick: () => {
            openModal({
              type: "join_server",
              client: props.client,
            });
          },
        },
        {
          text: "Create Server",
          onClick: () => {
            openModal({
              type: "create_server",
              client: props.client,
            });
          },
        },
      ]}
    >
      <Trans>
        Would you like to join or create a server?
      </Trans>
    </Dialog>
  );
}