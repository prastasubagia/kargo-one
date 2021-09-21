# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :kargo_be,
  ecto_repos: [KargoBe.Repo]

# Configures the endpoint
config :kargo_be, KargoBeWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "9/gwtpJZ7drLv+XHNp1VPHs7H9Hv//2PNgoocyzX3JDeM0JSd2qjiomiDPpGT9/E",
  render_errors: [view: KargoBeWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: KargoBe.PubSub,
  live_view: [signing_salt: "lQL/3JZP"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
