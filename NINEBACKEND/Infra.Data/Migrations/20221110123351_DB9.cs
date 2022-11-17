using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infra.Data.Migrations
{
    public partial class DB9 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Numero",
                table: "Cliente",
                newName: "Telefone");

            migrationBuilder.AlterColumn<string>(
                name: "CPF",
                table: "Cliente",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<string>(
                name: "NomeSobrenome",
                table: "Cliente",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NomeSobrenome",
                table: "Cliente");

            migrationBuilder.RenameColumn(
                name: "Telefone",
                table: "Cliente",
                newName: "Numero");

            migrationBuilder.AlterColumn<int>(
                name: "CPF",
                table: "Cliente",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT");
        }
    }
}
