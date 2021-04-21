"""empty message

Revision ID: e3fb3c4eea13
Revises: 48c7d6340a15
Create Date: 2021-04-20 18:26:44.134198

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e3fb3c4eea13'
down_revision = '48c7d6340a15'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('association',
    sa.Column('propiedad_id', sa.Integer(), nullable=True),
    sa.Column('right_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['propiedad_id'], ['propiedad.id'], ),
    sa.ForeignKeyConstraint(['right_id'], ['amenidades.id'], )
    )
    op.drop_table('provincias')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('provincias',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('provincia', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='provincias_pkey')
    )
    op.drop_table('association')
    # ### end Alembic commands ###
