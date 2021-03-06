"""empty message

Revision ID: 8d8f15e175fd
Revises: e144345aba90
Create Date: 2021-05-16 14:39:49.988985

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8d8f15e175fd'
down_revision = 'e144345aba90'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('propiedad', 'provincia_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('propiedad', 'localidad_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('propiedad', 'localidad_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('propiedad', 'provincia_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###
