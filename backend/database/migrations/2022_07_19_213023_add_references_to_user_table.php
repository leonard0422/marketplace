<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('last_name');
            $table->string('phone', 11);
            $table->integer('document');
            $table->string('address');
            $table->string('neighborhood');

            $table->text('additional_info')->nullable();

            $table->unsignedBigInteger('document_type_id');
            $table->foreign('document_type_id')
                ->references('id')
                ->on('document_types')
                ->onDelete('cascade');

            $table->unsignedBigInteger('departament_id');
            $table->foreign('departament_id')
                ->references('id')
                ->on('departaments')
                ->onDelete('cascade');

            $table->unsignedBigInteger('city_id');
            $table->foreign('city_id')
                ->references('id')
                ->on('cities')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('last_name');
            $table->dropColumn('phone');
            $table->dropColumn('document');
            $table->dropColumn('address');
            $table->dropColumn('neighborhood');
            $table->dropColumn('additional_info');

            $table->dropForeign(['document_type_id']);
            $table->dropColumn('document_type_id');

            $table->dropForeign(['departament_id']);
            $table->dropColumn('departament_id');

            $table->dropForeign(['city_id']);
            $table->dropColumn('city_id');

        });
    }
};
