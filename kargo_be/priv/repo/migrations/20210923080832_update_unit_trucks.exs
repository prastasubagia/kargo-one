defmodule KargoBe.Repo.Migrations.UpdateUnitTrucks do
  use Ecto.Migration

  def change do
    alter table(:trucks) do
      remove :truck_type
      add :truck_type, references(:truck_types, on_delete: :nothing)
    end
  end
end
